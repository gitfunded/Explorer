import * as React from "react";
import emotionStyled from "lib/emotion-styled";
import css from "@styled-system/css";
import { Flex, Text, Link } from "rebass";
import { AvatarProps } from "fora-components/Avatar";
import AvatarImage from "fora-components/AvatarImage";
import moment from "moment";
import { faReply } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VerticalDivider from "fora-components/VerticalDivider";

const Container = emotionStyled(Flex)(props =>
  css({
    "> :first-of-type": { mr: 3 }
  })
);
const DetailsContainer = emotionStyled(Flex)(props =>
  css({
    "> :not(:last-child)": { mr: 1 },
    mb: 2
  })
);
const ContentContainer = emotionStyled(Flex)(props =>
  css({
    maxWidth: "600px",
    mb: 3
  })
);
const NameLink = emotionStyled(Link)(props =>
  css({
    display: "flex",
    alignItems: "center",
    "> :first-of-type": { mr: 2, cursor: "pointer" },
  })
);

const ReplyContainer = emotionStyled(Flex)(props =>
  css({
    display: "flex",
    alignItems: "center",
    "> :first-of-type": { mr: 2, cursor: "pointer" },
    "> svg:first-of-type": { color: "seaGlass200" }
  })
)

export type Commenter = Pick<AvatarProps, "name" | "screenName" | "address" | "src" | "onDark">;
export interface ISingleCommentProps {
  isReply?: boolean;
  replyOnClickHandler?: any;
  isPreview?: boolean;
  replyHref?: string;
  content: string;
  timestamp: any;
  commenter: Commenter;
}
const SingleComment: React.FunctionComponent<ISingleCommentProps> = props => (
  <Container>
    <Link href={`/address/${props.commenter.address}`}>
      <AvatarImage src={props.commenter.src}></AvatarImage>
    </Link>
    <Flex flexDirection="column">
      <DetailsContainer alignItems="center">
        <NameLink variant="link" href={`/address/${props.commenter.address}`}>
          <Text variant="body" color="black">
            {props.commenter.name}
          </Text>
          <Text>@{props.commenter.screenName}</Text>
        </NameLink>
        <Text>{` ∙ `}</Text>
        <Text variant="body" color="gray400">
          {moment(props.timestamp).fromNow()}
        </Text>
      </DetailsContainer>
      <ContentContainer>
        {props.isPreview ? (
          <>
            <VerticalDivider marginLeft={1}></VerticalDivider>
            <Text variant="bodyItalic" color="gray500">
              {props.content}
            </Text>
          </>
        ) : (
          <Text variant="body" color="gray500">
            {props.content}
          </Text>
        )}
      </ContentContainer>
      {!props.isReply && (
        <ReplyContainer onClick={props.replyOnClickHandler}>
          <FontAwesomeIcon icon={faReply}></FontAwesomeIcon>
          <Text variant="body" color="seaGlass300">{`Reply`}</Text>
        </ReplyContainer>
      )}
    </Flex>
  </Container>
);

export default SingleComment;