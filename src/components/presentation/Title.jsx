import { Heading } from "@radix-ui/themes";

const Title = () => {
  return (
    <Heading
      as="h1"
      size={"8"}
      align={"center"}
      weight={"bold"}
      color="indigo"
      highContrast
    >
      To Do List
    </Heading>
  );
};

export default Title;
