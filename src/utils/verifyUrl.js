// utils/urlUtils.js

export const verifyUrl = async (url, showSnackbarCallback) => {
  try {
    const res = await fetch("http://localhost:8000/validateUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    if (res.status === 400 && data.code) {
      showSnackbarCallback(data.error);
      return false;
    }

    if (res.status === 200) {
      showSnackbarCallback(data.message);
      return true;
    }
  } catch (error) {
    showSnackbarCallback("Validation failed. Please try again.");
    return false;
  }
};
