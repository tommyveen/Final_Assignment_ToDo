async function getData() {
try {
    const apiUrl = "http://localhost:3000/";
    const res = await fetch(apiUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
} catch (err) {
    const error = "No access";
    console.log(error);
}
}

// getData()

const postData = async function(x) {
try {
    const apiUrl = "http://localhost:3000/";
    const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(x),
    });
    const data = await res.json();
    return data;
} catch (err) {
    const error = "No access";
    console.log(error);
}
}

// postData()

async function putData(x, y) {
    try {
        const apiUrl = `http://localhost:3000/${x}`
        const res = await fetch(apiUrl, {
        method: 'PUT',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(y)
        });
        const data = await response.json();
        return data;
  } catch (err) {
        const error = "No access";
        console.log(error);
  }
}

// putData()

async function deleteData(x) {
  try {
      const apiUrl = `http://localhost:3000/${x}`;
      const res = await fetch(apiUrl, {
      method:"DELETE",
      headers: { "Content-Type":"application/json" },
      });
      const data = await res.json();
      return data;
  } catch (err) {
      const error = "No access";
      console.log(error);
  }
}

// deleteData()


 