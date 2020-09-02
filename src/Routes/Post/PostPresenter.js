import React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Avatar from "../../Components/Avatar";
import { HeartEmpty, HeartFull, Comment } from "../../Components/Icons";
import TextareaAutosize from "react-autosize-textarea";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url() (${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showiing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
}) => {
  return (
    <Post>
      <Header>
        <Avatar size="sm" url={avatar} />
        <UserColumn>
          <FatText text={username} />
          <Location>{location}</Location>
        </UserColumn>
      </Header>
      <Files>
        {files &&
          files.map((file, index) => {
            return (
              <File
                key={file.id}
                src={file.url}
                showoing={index === currentItem}
              />
            );
          })}
      </Files>
      <Meta>
        <Buttons>
          <Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
          <Button>
            <Comment />
          </Button>
        </Buttons>
        <FatText text={likeCount === 1 ? "1 like" : `${likeCount}`} />;
        <Timestamp>{createAt}</Timestamp>
        <Textarea placeholder={"Add a comment..."} {...newComment} />
      </Meta>
    </Post>
  );
};
