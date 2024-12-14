import { Box } from "@radix-ui/themes";
import { colors } from "../../styles/colors";

const Todolist = ({ children }) => {
  return (
    <Box style={{ height: "100vh", backgroundColor: colors.purple }}>
      {children}
    </Box>
  );
};

export default Todolist;
