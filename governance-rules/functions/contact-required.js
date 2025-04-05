/**
 * Custom Spectral function: contact-required
 * Validates that the info object includes a non-empty contact field.
 */
module.exports = function contactRequired(targetVal, _opts, paths) {
  if (!targetVal || typeof targetVal !== 'object') {
    return [
      {
        message: "The 'info' object must be an object.",
        path: paths.target,
      },
    ];
  }

  if (!targetVal.contact || typeof targetVal.contact !== 'object' || Object.keys(targetVal.contact).length === 0) {
    return [
      {
        message: "The 'info.contact' field must be a non-empty object.",
        path: [...paths.target, 'contact'],
      },
    ];
  }

  return [];
};
