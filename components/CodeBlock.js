import { CopyBlock, atomOneDark } from "react-code-blocks";

const CodeBlock = ({ text }) => {
  return (
    <div className="code-block">
      <CopyBlock
        text={text}
        language="javascript"
        theme={atomOneDark}
        codeBlock={true}
      />
    </div>
  );
};

export default CodeBlock;
