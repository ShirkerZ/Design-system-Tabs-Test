export const getClassNames = (baseClassName: string, props: Record<string, any>) => {
  let classNames = baseClassName;
  for (const [_, value] of Object.entries(props)) {
    if (value) {
      classNames = `${classNames} ${value}`;
    }
  }

  return classNames;
};
