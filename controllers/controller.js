import axios from "axios";

export const fetchData = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    const response = await axios.get(`${process.env.BASE_URL}/data`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.status(200).json(response.data);
  } catch (err) {
    if (err.response) {
      res.status(400).json(err.response.data);
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};


export const createUser = async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/register`,
      JSON.stringify(req.body)
    );

    const results = await response.data;
    res.status(201).json(results);
  } catch (err) {
    if (err.response) {
      res.status(400).json(err.response.data);
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};


export const login = async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/login`,
      JSON.stringify(req.body)
    );

    const results = await response.data;
    res.status(200).json(results);
  } catch (err) {
    if (err.response) {
      res.status(400).json(err.response.data);
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
