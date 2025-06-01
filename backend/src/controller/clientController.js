import * as query from "../service/queries.js";

export const get = async (req, res) => {
  try {
    const clients = await query.getClients();
    res.status(200).json(clients);
  } catch (err) {
    console.error("error in fetching the client:", err);
    res.status(500).json({ message: "internal server error" });
  }
};

export const post = async (req, res) => {
  try {
    const client = req.body;
    await query.createClient(client);
    res.status(200).json(client);
  } catch (err) {
    console.error("error in creating client", err);
    res.status(500).json({ message: "internal server error" });
  }
};
