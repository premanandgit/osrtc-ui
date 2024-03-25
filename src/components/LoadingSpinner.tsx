import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

interface LoadingSpinnerProps {
  loading: boolean;
}

const override = css`
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading }) => {
  return (
    <div className="spinner-container">
      <ClipLoader color="#36D7B7" loading={loading} css={override} size={50} />
    </div>
  );
};

export default LoadingSpinner;
