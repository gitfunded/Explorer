import React from 'react';
import { Flex, Text, Box } from 'rebass';
import Divider from 'fora-components/Divider';
import AvatarImage from 'fora-components/AvatarImage';
import css from '@styled-system/css';
import styled from 'lib/emotion-styled';
import moment from 'moment';
import BountyPreviewCard from 'fora-components/Card/BountyPreviewCard';

const Container = styled(Flex)(() => css({ maxWidth: 570 }));
const Content = styled(Flex)(() => css({ '> *:first-child': { mr: 3 } }));
const DescriptionContainer = styled(Flex)(() =>
  css({ '> :not(:last-child)': { mb: 3 } })
);
const Description = styled(Box)(() =>
  css({
    '> *': {
      display: 'inline-block',
      textAlign: 'left'
    },
    '> *:nth-child(2)': {
      mx: 1
    }
  })
);

export interface IBountyCreatedProps {
  activityType: 'bountyCreated';
  avatarSrc: string | undefined;
  authorName: string | undefined;
  authorAddress: string;
  bountyTitle: string;
  bountyStatus: string;
  timestamp: string;
  bountyExpirationTimestamp: string;
  communityName: string;
  submissionCount: number;
}
const BountyCreated: React.FC<IBountyCreatedProps> = ({
  avatarSrc,
  authorName,
  bountyTitle,
  bountyStatus,
  bountyExpirationTimestamp,
  timestamp,
  communityName,
  authorAddress,
  submissionCount
}) => (
  <Container flexDirection="column">
    <Content>
      <AvatarImage
        address={authorAddress}
        src={avatarSrc}
        resourceType="user"
      />
      <DescriptionContainer flexDirection="column">
        <Description>
          <Text variant="bodyStrong">{authorName || '--'}</Text>
          <Text variant="body" color="gray400">{` created a bounty`}</Text>
        </Description>
        <BountyPreviewCard
          status={bountyStatus}
          title={bountyTitle}
          expirationTimestamp={bountyExpirationTimestamp}
          submissionCount={submissionCount}
          ethInUSD={'435'}
          ethAmount={'0.56'}
        />
        <Flex>
          <Text variant="body" color="gray400">
            {moment(timestamp).fromNow()} • {`f/${communityName}`}
          </Text>
        </Flex>
      </DescriptionContainer>
    </Content>
    <Divider />
  </Container>
);

export default BountyCreated;
