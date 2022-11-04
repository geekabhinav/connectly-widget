import React, { useMemo } from "react";
import { Bubble, Icon, BubbleProps } from "../../components";
import { ConnectlyIcon } from "../../utils/icons";
import { withAnimate, WithAnimateProps } from "../../components/withAnimation";

type MinimizedProps = WithAnimateProps & Partial<BubbleProps>

const MinimizedInternal: React.FC<MinimizedProps> = ({ navigate }) => {
  const goToExpanded = React.useCallback(() => {
    setTimeout(() => navigate("/"), 100);
  }, [navigate]);

  return useMemo(() => <Bubble onHover={goToExpanded} size="large" isCircle>
    <Icon src={ConnectlyIcon} alt="Message Connectly"/>
  </Bubble>, [goToExpanded]);
}

export const Minimized = withAnimate<MinimizedProps>(MinimizedInternal, "minimized-card")
