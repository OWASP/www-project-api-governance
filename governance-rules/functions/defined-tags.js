module.exports = (targetVal, opts, paths, otherValues) => {
    const tags = otherValues.document.data.tags || [];
    return tags.some(tag => tag.name === targetVal)
      ? []
      : [
          {
            message: `The tag "${targetVal}" is not defined in global tags.`,
          },
        ];
  };
  