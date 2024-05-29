'use client';
import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/theme";
import {
  Container,
  Header,
  Input,
  ButtonContainer,
  Button,
} from "../../App.style";

function Calculator() {
  const [value, setValue] = useState<string>("");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const calc = () => {
    if (value.length >= 5 && value.slice(-1) !== " ") {
      try {
        const result = eval(value).toString();
        if (result.length > 9) {
          setValue("LIMIT");
        } else {
          setValue(result);
        }
      } catch (e) {
        setValue("Error");
      }
    }
  };

  const deleteValue = () => {
    if (value.slice(-1) === " ") {
      setValue(value.substring(0, value.length - 3));
    } else if (value.slice(-2) === "0.") {
      setValue(value.substring(0, value.length - 2));
    } else {
      setValue(value.substring(0, value.length - 1));
    }
  };

  const addSimbol = (simbol: string) => {
    if (value.length < 9) {
      if (value.slice(-1) !== " " && value.slice(-1) !== ".") {
        setValue(value + simbol);
      }
    }
  };

  const addNumber = (num: string) => {
    if (value.length < 9) {
      setValue(value + num);
    }
  };

  const toggleSign = () => {
    if (value.length > 0 && value.length < 9) {
      if (value[0] === '-') {
        setValue(value.substring(1));
      } else {
        setValue('-' + value);
      }
    }
  };

  const calculatePower = () => {
    if (value.length > 0) {
      const parts = value.split(" ");
      if (parts.length === 3 && !isNaN(Number(parts[0])) && parts[1] === "^" && !isNaN(Number(parts[2]))) {
        const result = Math.pow(Number(parts[0]), Number(parts[2])).toString();
        if (result.length > 9) {
          setValue("LIMIT");
        } else {
          setValue(result);
        }
      } else {
        setValue("Error");
      }
    }
  };

  const calculateSquareRoot = () => {
    if (value.length > 0 && !isNaN(Number(value))) {
      const result = Math.sqrt(Number(value)).toString();
      if (result.length > 9) {
        setValue("LIMIT");
      } else {
        setValue(result);
      }
    } else {
      setValue("Error");
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event;
      setActiveKey(key);
      if ((/\d/).test(key)) {
        addNumber(key);
      } else if (key === '+') {
        addSimbol(' + ');
      } else if (key === '-') {
        addSimbol(' - ');
      } else if (key === '*') {
        addSimbol(' * ');
      } else if (key === '/') {
        addSimbol(' / ');
      } else if (key === '%') {
        addSimbol(' % ');
      } else if (key === '.') {
        addSimbol('.');
      } else if (key === '^') {
        addSimbol(' ^ ');
      } else if (key === 'Enter') {
        calc();
      } else if (key === 'Backspace') {
        deleteValue();
      }
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [value]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          JACK Calculator
        </Header>

        <Input>{value}</Input>

        <ButtonContainer>
          <Button 
            onClick={() => addNumber("7")} 
            className={activeKey === '7' ? 'active' : ''}
          >7</Button>
          <Button 
            onClick={() => addNumber("8")} 
            className={activeKey === '8' ? 'active' : ''}
          >8</Button>
          <Button 
            onClick={() => addNumber("9")} 
            className={activeKey === '9' ? 'active' : ''}
          >9</Button>
          <Button 
            onClick={() => value.length >= 1 && deleteValue()}
            color="var(--white)"
            bg="var(--key-background-dark-blue)"
            bdbox="var(--key-shadow-dark-blue)"
            className={activeKey === 'Backspace' ? 'active' : ''}
          >
            DEL
          </Button>
          <Button 
            onClick={() => addNumber("4")} 
            className={activeKey === '4' ? 'active' : ''}
          >4</Button>
          <Button 
            onClick={() => addNumber("5")} 
            className={activeKey === '5' ? 'active' : ''}
          >5</Button>
          <Button 
            onClick={() => addNumber("6")} 
            className={activeKey === '6' ? 'active' : ''}
          >6</Button>
          <Button 
            onClick={() => value.length >= 1 && addSimbol(" / ")}
            className={activeKey === '/' ? 'active' : ''}
          >
            /
          </Button>

          <Button 
            onClick={() => addNumber("1")} 
            className={activeKey === '1' ? 'active' : ''}
          >1</Button>
          <Button 
            onClick={() => addNumber("2")} 
            className={activeKey === '2' ? 'active' : ''}
          >2</Button>
          <Button 
            onClick={() => addNumber("3")} 
            className={activeKey === '3' ? 'active' : ''}
          >3</Button>
          <Button 
            onClick={() => value.length >= 1 && addSimbol(" * ")}
            className={activeKey === '*' ? 'active' : ''}
          >
            x
          </Button>

          <Button 
            onClick={toggleSign}
            className={activeKey === '±' ? 'active' : ''}
          >+/-</Button>
          <Button 
            onClick={() => addNumber("0")} 
            className={activeKey === '0' ? 'active' : ''}
          >0</Button>
          <Button 
            onClick={() => value.length >= 1 && addSimbol(".")}
            className={activeKey === '.' ? 'active' : ''}
          >.</Button>
          <Button 
            onClick={() => value.length >= 1 && addSimbol(" - ")}
            className={activeKey === '-' ? 'active' : ''}
          >
            -
          </Button>

          <Button 
            onClick={() => value.length >= 1 && addSimbol(" ^ ")}
            className={activeKey === '^' ? 'active' : ''}
          >
            ^
          </Button>
          <Button 
            onClick={calculateSquareRoot}
            className={activeKey === '√' ? 'active' : ''}
          >
            √
          </Button>
          <Button 
            onClick={() => value.length >= 1 && addSimbol(" % ")}
            className={activeKey === '%' ? 'active' : ''}
          >
            %
          </Button>
          <Button 
            onClick={() => value.length >= 1 && addSimbol(" + ")}
            className={activeKey === '+' ? 'active' : ''}
          >
            +
          </Button>

          <Button
            gc="1/3"
            color="var(--white)"
            bg="var(--key-background-dark-blue)"
            bdbox="var(--key-shadow-dark-blue)"
            onClick={() => setValue("")}
            className={activeKey === 'Escape' ? 'active' : ''}
          >
            RESET
          </Button>

          <Button
            gc="3/5"
            color={"var(--white)"}
            bg="var(--key-background-red)"
            bdbox="var(--key-shadow-dark-red)"
            onClick={calc}
            className={activeKey === 'Enter' ? 'active' : ''}
          >
                        =
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Calculator;
     