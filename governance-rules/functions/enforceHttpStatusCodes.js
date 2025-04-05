module.exports = (targetVal, _opts, ctx) => {
    const allowed = [200, 201, 204, 400, 401, 403, 404, 409, 500, 503];
  
    const results = [];
  
    if (typeof targetVal !== 'object') return;
  
    for (const statusCode in targetVal) {
      if (!allowed.includes(Number(statusCode))) {
        results.push({
          message: `Status code "${statusCode}" is not part of the allowed set.`,
          path: [...ctx.path, statusCode],
        });
      }
    }
  
    return results;
  };
  