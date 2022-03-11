import { Link } from "react-router-dom";

type Props = {
  color: string;
};

const AuthorName: React.FC<Props> = (props: Props) => {
  return <div className={`brianna ${props.color}`}>Brianna Cerkiewicz</div>;
};
export default AuthorName;
