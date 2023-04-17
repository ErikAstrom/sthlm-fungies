"use client"
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, Box, Card, CardHeader, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { ContactForm, SubmitAlert } from "src/data/types";
import * as core from "src/lib/core";
import * as validators from "src/lib/validators";

function shouldShowError(contactForm: ContactForm, key: string) {
    return contactForm[key].validated && !contactForm[key].valid;
}

export default function DiscordForm() {
    const [contactForm, setContactForm] = useState<ContactForm>(core.getEmptyContactFormType());
    const [submitAlert, setSubmitAlert] = useState<SubmitAlert>(core.getEmptySubmitAlertType());
    const [isCalling, setIsCalling] = useState<boolean>(false);
    
    function handleSubmit() {

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

        if (validators.isFormValid(contactForm)) {
            setIsCalling(true);

            fetch('/api/contactUs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name.value, subject: subject.value, email: email.value, message: message.value })
            })
                .then(res => {
                    res.status > 200 && res.status < 300
                        ? setSubmitAlert({ show: true, message: 'Tack för ditt meddelande!', severity: 'success' })
                        : setSubmitAlert({ show: true, message: 'Något gick fel, försök igen senare', severity: 'error' });
                    setIsCalling(false);
                })
                .catch(err => {
                    console.log(err);
                    setSubmitAlert({ show: true, message: 'Något gick fel, försök igen senare', severity: 'error' });
                    setIsCalling(false);
                });
            setContactForm(core.getEmptyContactFormType());
        };
    }

    return (
        <Card sx={{ width: '100%', maxWidth: '400px', my: 2, px: 2, pb: 2, bgcolor: 'whitesmoke' }}>
            <CardHeader title="Kontakta oss" />
            <Box
                component="form"
                noValidate
                method="post"
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                }}
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
                        helperText={shouldShowError(contactForm, 'name') && 'Du måste skriva in ett namn'}
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
                        helperText={shouldShowError(contactForm, 'email') && 'Du måste skriva in en giltig mail'}
                        onChange={function (event) {
                            setContactForm({
                                ...contactForm,
                                email: {
                                    ...contactForm.email,
                                    value: event.target.value,
                                    valid: validators.emailValidator(event.target.value)
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
                        helperText={shouldShowError(contactForm, 'subject') && 'Du måste skriva in ett ämne'}
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
                        helperText={shouldShowError(contactForm, 'message') && 'Du måste skriva in ett meddelande'}
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
                    <LoadingButton loading={isCalling} endIcon={<SendIcon />} variant="outlined" color="primary" type="submit" sx={{ mb: 1 }} >
                        Skicka
                    </LoadingButton>
                </FormControl>
            </Box>
            {submitAlert.show && <Alert variant="filled" severity={submitAlert.severity}
                onClose={() => setSubmitAlert(core.getEmptySubmitAlertType())}>
                {submitAlert.message}
            </Alert>}
        </Card>
    )
}