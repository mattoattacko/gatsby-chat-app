const If = props => {
  return !!props.condition ? props.children : null;
};

export default If;