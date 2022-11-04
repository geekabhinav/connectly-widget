import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { Bubble, Icon, BubbleProps } from "../../components";
import { APP_CONFIG } from "../../config/app-config";
import { WidgetRoutes } from "../app/routes";
import { withAnimate, WithAnimateProps } from "../../components/withAnimation";

type ExpandedProps = WithAnimateProps & Partial<BubbleProps>;

const ExpandedInternal: React.FC<ExpandedProps> = ({ navigate }) => {
  const timerMinimize = useRef<NodeJS.Timer>();

  const resetMinimizeTimer = useCallback(() => {
    clearTimeout(timerMinimize.current);
  }, [timerMinimize]);

  const goToMinimize = React.useCallback(() => {
    navigate(`/${WidgetRoutes.minimized}`);
  }, [navigate]);

  const goToMenu = React.useCallback(() => {
    resetMinimizeTimer();
    navigate(`/${WidgetRoutes.menu}`);
  }, [navigate, resetMinimizeTimer]);

  const initMinimizeTimer = useCallback(() => {
    timerMinimize.current = setTimeout(goToMinimize, APP_CONFIG.timers.MINIMIZE_DELAY);
  }, [timerMinimize, goToMinimize]);

  useEffect(() => {
    initMinimizeTimer();
    return () => resetMinimizeTimer();
  }, [initMinimizeTimer, resetMinimizeTimer]);

  return useMemo(() => <Bubble onHover={resetMinimizeTimer} onLeave={initMinimizeTimer} onClick={goToMenu} size="large">
      {APP_CONFIG.apps.map(app => <Icon src={app.icon} alt={app.name} key={app.name}/>)}
      <span className="text h4">Message us</span>
    </Bubble>, [resetMinimizeTimer, initMinimizeTimer, goToMenu]);
}

export const Expanded = withAnimate<ExpandedProps>(ExpandedInternal, "expanded-card");
