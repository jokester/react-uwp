import * as React from "react";
import * as PropTypes from "prop-types";

import ElementState from "../ElementState";
import Icon from "../Icon";

export interface DataProps {
  /**
   * The IconButton `onMouseEnter` will applied to `rootElm.style`.
   */
  hoverStyle?: React.CSSProperties;
  /**
   * The IconButton `onMouseDown` will applied to `rootElm.style`.
   */
  activeStyle?: React.CSSProperties;
  /**
   * The control IconButton size.
   */
  size?: number;
  /**
   * The control IconButton disabled.
   */
  disabled?: boolean;
}

export interface IconButtonProps extends DataProps, React.HTMLAttributes<HTMLButtonElement> {}

export class IconButton extends React.Component<IconButtonProps, void> {
  static defaultProps: IconButtonProps = {
    size: 48
  };
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const {
      style,
      hoverStyle,
      activeStyle,
      children,
      size,
      disabled,
      ...attributes
    } = this.props;
    const { theme } = this.context;

    return (
      <ElementState
        {...attributes}
        style={{
          display: "inline-block",
          fontFamily: "Segoe MDL2 Assets",
          transition: "background .25s 0s ease-in-out",
          userSelect: "none",
          background: disabled ? theme.baseLow : "none",
          border: "none",
          outline: "none",
          fontSize: size / 2,
          width: size,
          height: size,
          cursor: "pointer",
          color: disabled ? theme.baseMedium : theme.baseHigh,
          padding: 0,
          flexShrink: 0,
          ...style
        }}
        hoverStyle={disabled ? void 0 : hoverStyle || {
          background: theme.listLow
        }}
        activeStyle={disabled ? void 0 : activeStyle || {
          background: theme.baseLow
        }}
      >
        <button>
          <Icon style={{ lineHeight: `${size}px` }}>{children}</Icon>
        </button>
      </ElementState>
    );
  }
}

export default IconButton;