import styled from "@emotion/styled";
import { Close as CloseIcon } from "@mui/icons-material";
import Title from "@mui/icons-material/Title";
import { Button, DialogTitle } from "@mui/material";

interface CustomDialogTitleProps {
  title: string;
  subTitle: string;
  onClose?: () => void;
}

export const CustomDialogTitle = ({
  title,
  subTitle,
  onClose,
  ...props
}: CustomDialogTitleProps) => {
  return (
    <DialogTitle {...props}>
      {onClose && (
        <Button>
          <CloseIcon />
        </Button>
      )}
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleContainer>
    </DialogTitle>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  max-width: 400px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  opacity: 0.7;
`;
