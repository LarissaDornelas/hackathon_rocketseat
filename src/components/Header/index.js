import React from "react";

import {
  Container,
  ScorePanel,
  Avatar,
  HealthsPanel,
  XP,
  MS,
  ProgressBar,
  UserName
} from "./styles";

const Header = ({ title, avatar, userName, xp, nextLevel, ms }) => (
  <Container>
    <h1>{title}</h1>
    <ScorePanel>
      <Avatar avatar={avatar} />
      <HealthsPanel>
        <XP>
          <span>XP</span>
          <span>{`${xp}/${nextLevel}`}</span>
          <ProgressBar progress={50} />
        </XP>
        <MS>
          <span>MS</span>
          <span>{`${ms}%`}</span>
          <ProgressBar progress={65} ms />
        </MS>
      </HealthsPanel>
      <UserName>{userName}</UserName>
    </ScorePanel>
  </Container>
);

export default Header;
