// Remove Next.js imports since we're using Vite
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1348832658901434399/R7zidLoEyfay6t3LrO7_EU8eXGn-N0B5EjSs9icPxw-UNzxu170jvR8t54foC1SX_daR";

export async function sendToDiscord(formData: { name: string; email: string; message: string }) {
  try {
    const timestamp = new Date().toLocaleString();
    const messageContent = {
      username: "Contact Form Bot",
      avatar_url: "https://i.imgur.com/4M34hi2.png",
      embeds: [{
        title: "New Contact Form Submission",
        color: 0x00ff00,
        fields: [
          {
            name: "Name",
            value: formData.name,
            inline: true
          },
          {
            name: "Email",
            value: formData.email,
          },
          {
            name: "Message",
            value: formData.message
          },
          {
            name: "Timestamp",
            value: timestamp,
            inline: true
          }
        ]
      }]
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageContent),
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status} ${response.statusText}`);
    }

    return { success: true, message: 'Message sent successfully' };
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message');
  }
} 