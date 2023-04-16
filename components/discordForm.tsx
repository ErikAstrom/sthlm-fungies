"use client"
import { Box, Button, Card, CardHeader, FormControl, TextField } from "@mui/material";
import { useState } from "react";

//TODO move to core and make it more generic, loop over keys
function formValidated(contactForm: any) {
    const { name, subject, message } = contactForm;
    return name.validated && subject.validated && message.validated;
}

//TODO move to core and make it more generic, loop over keys
function formValid(contactForm: any) {
    const { name, subject, message } = contactForm;
    return name.valid && subject.valid && message.valid;
}

function shouldShowError(contactForm: any, key: string) {
    return contactForm[key].validated && !contactForm[key].valid;
}

function initialState() {
    return {
        name: {
            value: '',
            validated: false,
            valid: false
        },
        subject: {
            value: '',
            validated: false,
            valid: false
        },
        email: {
            value: '',
            validated: false,
            valid: false
        },
        message: {
            value: '',
            validated: false,
            valid: false
        }
    };
}

export default function DiscordForm() {
    const [contactForm, setContactForm] = useState(initialState());
    const discordHookUrl = "https://discord.com/api/webhooks/1097255960323567758/I4Nw8B-BW16yKkvpDv8zG1D03JQUykAoVJP3OlQyCkfA0sZAAebf2hRcCxGo9ibC_ID-";

    function handleSubmit(event: any) {
        event.preventDefault();
        const { name, subject, message, email } = contactForm;

        setContactForm({
            name: {
                ...name,
                validated: true
            },
            subject: {
                ...subject,
                validated: true
            },
            email: {
                ...email,
                validated: true
            },
            message: {
                ...message,
                validated: true
            }
        });

        if (formValid(contactForm)) {
            const payload = {
                content: `**${subject.value}**\n\n Från: ${name.value}\n\ Kontaktuppgifter: ${email.value} \n\ ${message.value}`,
            };
            fetch(discordHookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err, 'error', JSON.stringify({ name: name.value, subject: subject.value, email: email.value, message: message.value })));
            setContactForm(initialState());
        }
    }

    return (
        <Card sx={{ width: '100%', maxWidth: '400px', my: 2, px: 2, pb: 2, bgcolor: 'whitesmoke' }}>
            <CardHeader title="Kontakta oss" />
            <Box
                component="form"
                noValidate
                method="post"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        size="small"
                        label="Ditt namn"
                        sx={{ mb: 1 }}
                        value={contactForm.name.value}
                        error={shouldShowError(contactForm, 'name')}
                        helperText={shouldShowError(contactForm, 'name') && "Du måste skriva in ett namn"}
                        onChange={function (event) {
                            setContactForm({
                                ...contactForm,
                                name: {
                                    ...contactForm.name,
                                    value: event.target.value,
                                    valid: event.target.value.length > 0
                                }
                            })
                        }}
                    />
                    <TextField
                        size="small"
                        label="E-post"
                        sx={{ mb: 1 }}
                        value={contactForm.email.value}
                        error={shouldShowError(contactForm, 'email')}
                        helperText={shouldShowError(contactForm, 'email') && "Du måste skriva in en mail"}
                        onChange={function (event) {
                            setContactForm({
                                ...contactForm,
                                email: {
                                    ...contactForm.email,
                                    value: event.target.value,
                                    valid: event.target.value.length > 0
                                }
                            })
                        }}
                    />
                    <TextField
                        size="small"
                        label="Ämne"
                        sx={{ mb: 1 }}
                        value={contactForm.subject.value}
                        error={shouldShowError(contactForm, 'subject')}
                        helperText={shouldShowError(contactForm, 'subject') && "Du måste skriva in ett ämne"}
                        onChange={function (event) {
                            setContactForm({
                                ...contactForm,
                                subject: {
                                    ...contactForm.subject,
                                    value: event.target.value,
                                    valid: event.target.value.length > 0
                                }
                            })
                        }}
                    />
                    <TextField
                        size="small"
                        label="Meddelande"
                        sx={{ mb: 1 }}
                        value={contactForm.message.value}
                        error={shouldShowError(contactForm, 'message')}
                        helperText={shouldShowError(contactForm, 'message') && "Du måste skriva in ett meddelande"}
                        multiline
                        rows={5}
                        onChange={function (event) {
                            setContactForm({
                                ...contactForm,
                                message: {
                                    ...contactForm.message,
                                    value: event.target.value,
                                    valid: event.target.value.length > 0
                                }
                            })
                        }}
                    />
                    <Button variant="outlined" color="primary" type="submit" sx={{ mb: 1 }} >
                        Skicka
                    </Button>
                </FormControl>
            </Box>
        </Card>
    )
}