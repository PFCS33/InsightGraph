async function fetchPOST(url, payload, context) {
  const data = payload.data;

  try {
    context.commit("setLoading", true);
    let response = await fetch(url, {
      method: "POST",
      body: data,
    });

    let responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.message ? responseData.message : "RESPONSE ERROR"
      );
    }
    context.commit("setError", {
      state: false,
      message: "",
    });
    context.commit("setLoading", false);
    context.dispatch("handleData", responseData);
  } catch (error) {
    context.commit("setError", {
      state: true,
      message: error.message,
    });
    context.commit("setLoading", false);
    console.error("error:", error.message);
  }
}

export { fetchPOST };
