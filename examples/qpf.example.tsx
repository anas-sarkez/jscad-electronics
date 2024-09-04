import { JsCadFixture } from "jscad-fiber";
import { QFP } from "../lib/qpf";
import { ExtrudedPads } from "../src/lib/ExtrudedPads";

export default () => {
  return (
    <JsCadFixture zAxisUp>
      <QFP pinCount={48} />
      <ExtrudedPads footprint="qfp48" />
    </JsCadFixture>
  );
};
