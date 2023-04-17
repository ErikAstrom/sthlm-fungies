import { NextRequest } from "next/server";

const hookUrl = "https://discord.com/api/webhooks/1097417448619245669/zFkBwmOxp1Wrn06nydoNHOHQsbO-0wuwNR4Jf3J8DxNyxQ11QOrBGTtV-cMcFwI3b3Cd";

export async function POST(req: NextRequest) {
    const { name, message, subject, email } = await req.json();

    const body = {
        embeds: [{
            title: subject,
            description: message,
            type: "rich",
            color: 0x00ff00,
            fields: [
                {
                    name: "Name",
                    value: name,
                    inline: true,
                },
                {
                    name: "Email",
                    value: email,
                    inline: true,
                },
            ],
        }]
    };

    const res = await fetch(hookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    return res;
}