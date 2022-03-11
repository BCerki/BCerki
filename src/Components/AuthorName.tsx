type Props = {
  color: string;
};

const AuthorName: React.FC<Props> = (props: Props) => {
  return <h1 className={`brianna ${props.color}`}>Brianna Cerkiewicz</h1>;
};
export default AuthorName;
