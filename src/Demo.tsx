import { css } from '@emotion/css';
import { Component, createEffect, createSignal, Signal } from 'solid-js';
import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Modal from './components/Modal';
import Stack from './components/Stack';
import Table from './components/Table';
import TableBody from './components/Table/TableBody';
import TableCell from './components/Table/TableCell';
import TableHead from './components/Table/TableHead';
import TableRow from './components/Table/TableRow';
import TextField from './components/TextField';
import Typography from './components/Typography';
import { useTheme } from './styles/Theme';

const [theme, setTheme] = useTheme();

createEffect(() => {
    // @ts-ignore
    window.theme = theme;
    // @ts-ignore
    window.setTheme = setTheme;

    // @ts-ignore
    const bodyStyle = css({
        ...theme.typography?.body1,
        backgroundColor: theme.palette?.background?.default || 'white'
    });

    document.body.classList.add(bodyStyle);
});

const Demo: Component = () => {

    const modalSignal = createSignal(false);
    const [modalOpen, setModalOpen] = modalSignal;

    return (
        <Stack spacing={1}>
            <Stack direction='row' spacing={1}>
                <Stack spacing={1}>
                    <Card>
                        <Typography variant='h5' color="primary">
                            Button contained
                        </Typography>
                        <Stack spacing={1} direction="row">
                            {["primary", "secondary", "error", "warning", "success", "info"].map(color => (
                                // @ts-ignore
                                <Button color={color}>
                                    {color}
                                </Button>
                            ))}
                            <Button disabled>
                                disabled
                            </Button>
                        </Stack>
                    </Card>
                    <Card>
                        <Typography variant='h5' color="primary">
                            Button outlined
                        </Typography>
                        <Stack spacing={1} direction="row">
                            {["primary", "secondary", "error", "warning", "success", "info"].map(color => (
                                // @ts-ignore
                                <Button color={color} variant="outlined">
                                    {color}
                                </Button>
                            ))}
                            <Button variant="outlined" disabled>
                                disabled
                            </Button>
                        </Stack>
                    </Card>
                    <Card>
                        <Typography variant='h5' color="primary">
                            Button Text
                        </Typography>
                        <Stack spacing={1} direction="row">
                            {["primary", "secondary", "error", "warning", "success", "info"].map(color => (
                                // @ts-ignore
                                <Button color={color} variant="text">
                                    {color}
                                </Button>
                            ))}
                            <Button variant="text" disabled>
                                disabled
                            </Button>
                        </Stack>
                    </Card>
                    <Card>
                        <Typography variant='h5' color="primary">
                            Checkbox
                        </Typography>
                        <Stack spacing={1}>
                            <Stack spacing={1} direction="row">
                                {["primary", "secondary", "error", "warning", "success", "info"].map((color) => (
                                    <Checkbox
                                        label={color}
                                        onChange={(e: Event, newValue: boolean) => {
                                            console.log(newValue);
                                        }}
                                        defaultChecked
                                        // @ts-ignore
                                        color={color}
                                    />
                                ))}
                                <Checkbox
                                    label={"disabled"}
                                    disabled
                                    defaultChecked
                                />
                            </Stack>
                        </Stack>
                    </Card>

                </Stack>
                <Stack>
                    <Card>
                        <Typography variant='h5' color='primary'>
                            Table
                        </Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    [
                                        ['Frozen yoghurt', 159, 6.0, 24, 4.0],
                                        ['Ice cream sandwich', 237, 9.0, 37, 4.3],
                                        ['Eclair', 262, 16.0, 24, 6.0],
                                        ['Cupcake', 305, 3.7, 67, 4.3],
                                        ['Gingerbread', 356, 16.0, 49, 3.9]
                                    ].map((data) => (
                                        <TableRow>
                                            <TableCell>{data[0]}</TableCell>
                                            <TableCell align="right">{data[1]}</TableCell>
                                            <TableCell align="right">{data[2]}(g)</TableCell>
                                            <TableCell align="right">{data[3]}(g)</TableCell>
                                            <TableCell align="right">{data[4]}(g)</TableCell>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>
                    </Card>

                </Stack>
            </Stack>
            <Stack direction='row' spacing={1}>
                <Card>
                    <Typography variant='h5' color="primary">
                        Typography
                    </Typography>
                    <Stack spacing={1}>
                        {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'subtitle1', 'body1', 'body2', 'subtitle2', 'label']).map(variant => (
                            //@ts-ignore
                            <Typography variant={variant}>
                                {variant}
                            </Typography>
                        ))}
                    </Stack>
                </Card>
                <Stack spacing={1}>
                    <Card>

                        <Typography variant='h5' color='primary'>
                            TextField
                        </Typography>
                        <TextField label="Email" inputProps={{ type: 'email' }} />
                        <TextField label="Password" inputProps={{ type: 'password' }} />

                        <TextField label="Username" />
                        <TextField label="Disabled" disabled defaultValue="disabled" />

                    </Card>
                    <Card>
                        <Typography variant='h5' color='primary'>
                            Modal
                        </Typography>
                        <Button onClick={() => { setModalOpen(true); }}>
                            Open modal
                        </Button>
                        <Modal openSignal={modalSignal} >
                            MODAL CONTENT
                        </Modal>
                    </Card>
                </Stack>
            </Stack>


        </Stack>


    );
};

export default Demo;
