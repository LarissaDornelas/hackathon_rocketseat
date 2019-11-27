import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { toast } from "react-toastify";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Row } from "../../styles/global";
import colors from "../../styles/colors";
import { Container, Description, AnswersContainer, Button } from "./styles";

// import { Creators as MissionsActions } from "../../store/ducks/missions";

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.yellow }, // Purple and green play nicely together.
    secondary: { main: colors.orange } // This is just green.A700 as hex.
  },
  overrides: {
    MuiFormControlLabel: {
      root: {},
      label: {
        color: colors.light,
        fontSize: "20px"
      }
    },
    MuiRadio: {
      root: {}
    }
  }
});

const Mission = () => {
  const [header] = useState({
    avatar: "icons/level1.svg",
    username: "João",
    xp: "70",
    nextLevel: "120",
    ms: "60"
  });

  // const dispatch = useDispatch();
  const missions = useSelector(state => state.missions.data);
  const currentMission = useSelector(state => state.missions.current);
  const mission = missions[currentMission];
  const [opt, setOpt] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setOpt(mission.answers[0]);
      console.log(missions);
    }

    fetchData();
  }, [mission, missions]);

  const handleChangeOption = (e, value) => {
    setOpt(value);
  };

  const handleSubmit = () => {
    if (opt === mission.rightAnswer) {
      toast.success("Parabéns. Você acertou!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.error("Que pena. Você errou!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Row>
          <SideBar selected={2} />
          <Header
            title={`Missão ${currentMission + 1}`}
            avatar={header.avatar}
            userName={header.username}
            xp={header.xp}
            nextLevel={header.nextLevel}
            ms={header.ms}
          />
        </Row>
        <Row justifyContent="flex-start" margin="15px 10%">
          <Description>{mission.description}</Description>
        </Row>
        <AnswersContainer>
          <Typography
            variant="h5"
            style={{ marginBottom: 10, color: colors.light }}
          >
            A opção correta é:
          </Typography>
          <RadioGroup name="option" value={opt} onChange={handleChangeOption}>
            {mission.answers.map((option, i) => (
              <FormControlLabel
                key={i}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
          <Row justifyContent="flex-end">
            <Button onClick={handleSubmit}>Próxima missão</Button>
          </Row>
        </AnswersContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Mission;
