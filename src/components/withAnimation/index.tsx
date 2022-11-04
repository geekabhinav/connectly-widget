import React, { useState, useEffect, useRef } from "react";
import { useNavigate, To, NavigateFunction } from "react-router-dom";
import { APP_CONFIG } from "../../config/app-config";
import clsx from "clsx";

export interface WithAnimateProps {
  navigate: NavigateFunction;
}

export function withAnimate<T extends WithAnimateProps = WithAnimateProps>(
  WrappedComponent: React.ComponentType<T>,
  className: string
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithAnimation = (props: Omit<T, keyof WithAnimateProps>) => {
    const [isEntering, setIsEntering] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const enteringTimer = useRef<NodeJS.Timer>();
    const navigate = useNavigate();

    const onNavigate = React.useCallback((to: To) => {
      setIsEntering(false);
      clearTimeout(enteringTimer.current);
      setIsExiting(true);
      setTimeout(() => {
        navigate(to);
      }, APP_CONFIG.timers.ANIMATION_DURATION * 0.95);
    }, [navigate]);

    useEffect(() => {
      enteringTimer.current = setTimeout(() => {
        setIsEntering(false);
      }, APP_CONFIG.timers.ANIMATION_DURATION * 0.95);

      return () => clearTimeout(enteringTimer.current)
    }, []);

    return <div className={clsx({
      [className]: true,
      "entering": isEntering,
      "exiting": isExiting,
    })}>
      <WrappedComponent {...(props as T)} navigate={onNavigate} />
    </div>;
  };

  ComponentWithAnimation.displayName = `withTheme(${displayName})`;

  return ComponentWithAnimation;
}
