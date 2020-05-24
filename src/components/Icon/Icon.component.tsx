import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import * as Styled from "./Icon.styles";

library.add(fab, far, fas);

export type IconName = "twitter" | "cross" | "bars";

export interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
}

function mapNamePropToFaNames(iconName: IconName): IconProp {
  switch (iconName) {
    case "twitter":
      return ["fab", "twitter"];
    case "cross":
      return ["fas", "times"];
      case "bars":
        return ["fas", "bars"];

    default:
      return ["fab", "twitter"];
  }
}

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { size, color, name } = props;

  const iconName = mapNamePropToFaNames(name);

  return (
    <Styled.Container size={size}>
      <FontAwesomeIcon color={color} size={"lg"} icon={iconName} />
    </Styled.Container>
  );
}

export default Icon
