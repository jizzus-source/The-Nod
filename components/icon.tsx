import React, { useContext } from 'react';
import styled from 'styled-components';

export type IconProps = {
  className?: string;
  height?: number | string;
  name: string;
  width?: number | string;
  muted?: boolean;
  rounded?: boolean;
  cursor?: string;
  hideBreakpoints?: string;
} & React.HTMLAttributes<HTMLImageElement>;

export type IconPropsSrc = IconProps & {
  name: 'svg' | 'absoluteUrl';
  src: string;
};

const IconRoot = styled.img<IconProps>`
  width: ${(props: IconProps) => (props.width == undefined ? 'auto' : `${props.width}`)};
  height: ${(props: IconProps) => (props.height == undefined ? 'auto' : `${props.height}`)};
  filter: ${(props: IconProps) => (props.muted == undefined || props.muted ? '' : 'grayScale(1)')};
  ${(props: IconProps) => (props.rounded?"border-radius: 50%;":"")}
  ${(props: IconProps) => (props.cursor?`cursor: ${props.cursor};`: "")}
  ${(props: IconProps) => (props.hideBreakpoints?`@media ${props.hideBreakpoints}{ display: none; };`: "")}
`;

// eslint-disable-next-line react/display-name
const Icon: React.FC<IconProps | IconPropsSrc> = React.forwardRef(
  (props: IconProps | IconPropsSrc, ref: React.Ref<HTMLImageElement>) => {
    const baseContentPath = useContext(React.createContext<string | null>(null));

    const formatImageSource = (): string => {
      switch (props.name) {
        case 'svg':
          return `data:image/svg+xml;utf8,${encodeURIComponent((props as IconPropsSrc).src)}`;
        case 'absoluteUrl':
          return (props as IconPropsSrc).src;
        default:
          return `${baseContentPath || ''}/icons/${props.name}`;
      }
    };

    return (
      <IconRoot
        data-testid={'icon-root'}
        ref={ref}
        {...props}
        src={formatImageSource()}
        alt={`${props.name} icon`}
      />
    );
  },
);

export default Icon;