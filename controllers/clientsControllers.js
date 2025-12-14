import dotenv from 'dotenv';
import prisma from "../config/prismaConfig.js";
dotenv.config();

export const getAllClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      where: { isp_id: req.session.user.isp_id }
    });
    return res.status(200).json({
      success: true,
      message: "Clients retrieved successfully",
      clients,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
}