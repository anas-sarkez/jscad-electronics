import { JsCadFixture } from "jscad-fiber";
import { BGA } from "../lib/BGA";
import { ExtrudedPads } from "../src/lib/ExtrudedPads";


export default () => {
  return (
    <JsCadFixture>
      <BGA />
    {/* <ExtrudedPads footprint="bga64" /> */}
    </JsCadFixture>
  );
};

