import { Button } from "@radix-ui/themes";

const DoneButton = ({ isDone, func }) => {
  return (
    <Button color={isDone ? "blue" : "red"} onClick={func}>
      {isDone ? "완료" : "미완료"}
    </Button>
  );
};

export default DoneButton;
