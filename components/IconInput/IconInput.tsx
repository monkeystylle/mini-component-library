import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/constants';
import Icon from '../Icon/Icon';
import VisuallyHidden from '../VIsuallyHidden/VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...props
}: any) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{ '--size': styles.iconSize + 'px' } as CSSProperties}
      >
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>

      <TextInput
        placeholder={placeholder}
        {...props}
        style={
          {
            '--width': width + 'px',
            '--height': styles.height + 'px',
            '--border-thickness': styles.borderThickness + 'px',
            '--font-size': styles.fontSize + 'px',
          } as CSSProperties
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  font-weight: 700;
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
`;

export default IconInput;
