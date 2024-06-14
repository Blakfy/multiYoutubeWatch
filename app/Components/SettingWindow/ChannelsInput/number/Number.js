import { Badge } from "@radix-ui/themes";

export default function Number(props) {
  return (
    <Badge variant="soft" color={"orange"} size="2" mr={"1"}>
      {props.number && props.number < 10 ? "0" + props.number : props.number}
    </Badge>
  );
}
