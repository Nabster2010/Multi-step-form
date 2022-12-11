import * as Switch from "@radix-ui/react-switch";
import { useDataContext } from "../contexts/context.js";

const Toggle = () => {
  const { toggleMonthly } = useDataContext();
  return (
    <Switch.Root onCheckedChange={toggleMonthly} className="SwitchRoot">
      <Switch.Thumb className="SwitchThumb" />
    </Switch.Root>
  );
};

export default Toggle;
