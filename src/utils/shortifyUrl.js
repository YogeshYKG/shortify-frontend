// utils/shortifyUrl.js

export const ShortifyUrl = async (longUrl, setShortUrl, showSnackbarCallback) => {
  try {
    if (!longUrl) {
      showSnackbarCallback("Url can not be Empty!!");
      return false;
    }
    if (longUrl) {
      const res = await fetch("http://localhost:8000/shortifyUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });
      const data = await res.json();
      debugger
      setShortUrl(`${window.location.origin}/${data.shortUrl}`);
      showSnackbarCallback(data.message || data.error);

    }
  } catch (error) {
    console.log("Error in shortifyUrl function in src/utils", error);
    return false;
  }
};
