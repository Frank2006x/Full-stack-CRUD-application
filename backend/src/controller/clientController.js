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
export const update = async (req, res) => {
  try {
    const client = req.body;
    const id = req.params.id;
    const updatedUser = await query.updateClient(client, id);
    if (!updatedUser) {
      return res.status(404).json({ message: "client not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("error in updating client", err);
    res.status(500).json({ message: "internal server error" });
  }
};
export const del = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await query.deleteClient(id);
    if (!result) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).send();
  } catch (err) {
    console.error("error in deleting client", err);
    res.status(500).json({ message: "internal server error" });
  }
};

export const searchClients = async (req, res) => {
  try {
    const searchQuery = req.query.c;
    const clients = await query.searchClients(searchQuery);
    res.status(200).json(clients);
  } catch {
    console.error("error in searching client", err);
    res.status(500).json({ message: "internal server error" });
  }
};
