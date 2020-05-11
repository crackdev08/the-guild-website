import React from 'react';
import styled from 'styled-components';
import NativeLink from 'next/link';
import { Image } from '../blog/image';

const Title = styled.h2`
  color: var(--colors-text);
`;

const Description = styled.div`
  color: var(--colors-dim);
  margin: 1rem 0;
`;

const Link = styled(NativeLink)`
  &:hover > * {
    opacity: 0.75;
  }
`;

const Cover = styled(Image)<{ noShadow: boolean; maxSize?: number }>`
  display: block;
  max-width: ${(props) => (props.maxSize ? props.maxSize + 'px' : '100%')};
  min-width: 200px;
  max-height: 200px;
  height: auto;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.noShadow ? 'none' : '0 4px 14px 0 rgba(0, 0, 0, 0.1)'};
`;

const Container = styled.div<{ width: number }>`
  display: flex;
  text-align: left;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;

    & > *:last-child {
      max-width: 50%;
      margin: 25px auto 0 auto;
    }
  }

  @media (min-width: 640px) {
    & > *:first-child {
      width: 70%;
      margin: 0 auto;
    }

    & > *:last-child {
      max-width: 50%;
      margin: 25px auto 0 auto;
    }
  }

  @media (max-width: 640px) {
    & > *:first-child {
      width: 70%;
      margin: 0 auto;
    }

    & > *:last-child {
      max-width: 70%;
      margin: 25px auto 0 auto;
    }
  }

  @media (min-width: 961px) {
    align-items: center;
    justify-content: space-between;

    & > *:first-child {
      width: ${(props) => props.width}%;
    }

    & > *:last-child {
      width: 50%;
      margin: 0 auto;
    }
  }
`;

export const Featured: React.FC<{
  title: string;
  description: string | React.ReactElement;
  image: string;
  link: string;
  noShadow?: boolean;
  width?: number;
  maxCoverSize?: number;
  className?: string;
}> = ({
  title,
  description,
  image,
  link,
  className,
  noShadow,
  width,
  maxCoverSize,
}) => {
  return (
    <Container className={className} width={width || 40}>
      <Link href={link} as="a" title={title}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Link>
      <Link href={link} as="a" title={title}>
        <Cover
          src={image}
          alt={title}
          noShadow={!!noShadow}
          maxSize={maxCoverSize}
        />
      </Link>
    </Container>
  );
};
