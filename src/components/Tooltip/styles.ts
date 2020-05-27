import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  
  span {
    width: max-content;
    background-color: rgba(255, 14, 0, 0.8);
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s; 
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: white;
    visibility: hidden;

    &::before {
      content: '';
      border: solid;
      border-style: rgba(255, 14, 0, 0.8) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;