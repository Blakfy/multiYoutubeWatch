import { Flex, Box } from "@radix-ui/themes";
import Input from "./input/Input";
import Number from "./number/Number";
import Platform from "./platform/Platform";

export default function Channel(props) {
  return (
    <Flex direction={"column"} gap={"3"} pt={"3"}>
      <Flex>
        {/* //? Kanal Numarasını Temsil eder */}
        <Number
          //! Kanal Numarasını temsil eder
          number={props.number}
        />
        {/* //? Kanal ID sini Temsil eder */}
        <Input
          //! Kanal ID sini temsil eder
          id={props.id}
          name={props.id}
          //! id bilgisini takip ederek input'un içeriğinin değişimini sağlar.
          handleInputChange={props.handleInputChange}
          //! Hangi input'un değiştiğini id üzerinden takip eder
          videoId={props.videoId}
        />
        {/* //?  Platform seçimini temsil eder */}
        <Platform
          //! Seçilen platform bilgisini temsil eder
          id={props.id}
          videoPlatfrom={props.videoPlatfrom}
          platformChange={props.platformChange}
        />
      </Flex>
    </Flex>
  );
}
