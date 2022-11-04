import React, { useMemo } from "react";
import { Bubble, Icon } from "../../components";
import { CloseIcon } from "../../utils/icons";
import { APP_CONFIG } from "../../config/app-config";
import { WithAnimateProps, withAnimate } from "../../components/withAnimation";

const MenuInternal: React.FC<WithAnimateProps> = ({ navigate }) => {
  const goToExpanded = React.useCallback(() => navigate("/"), [navigate]);
  const openChat = React.useCallback((appName: string) => navigate(`/chat/${appName}`), [navigate]);

  return useMemo(() => <>
      {APP_CONFIG.apps.map(app => <Bubble size="small" key={app.name} onClick={openChat.bind(this, app.name)}>
        <Icon src={app.icon} alt={app.name}/>
        {app.name}
      </Bubble>)}
      <Bubble size="xs" isCircle onClick={goToExpanded} extraClasses="close">
        <Icon src={CloseIcon} alt="close menu"/>
      </Bubble>
    </>, [goToExpanded, openChat]);
}

export const Menu = withAnimate<WithAnimateProps>(MenuInternal, "menu");
