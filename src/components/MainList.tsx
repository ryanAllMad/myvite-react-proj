// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRandomWords } from "../data"
import { useDispatch, useSelector } from "react-redux"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { addItem, removeItem } from "../store"
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

function MainList() {
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const randomWords = useSelector((state: any) => {
    return state.items
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleItemAdd = (item: any) => {
    dispatch(addItem(item))
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleItemRemove = (item: any) => {
    dispatch(removeItem(item))
  }

  const renderedList = randomWords.map((item: string) => {
    return (
      <ListItem disablePadding key={item}>
        <ListItemButton onClick={() => handleItemRemove(item)}>
              <ListItemIcon>
                <DeleteIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
          </ListItemButton>
      </ListItem >
    );
  });

  return (
    <Box sx={{ width: '100%' }}>
      <Button onClick={() => handleItemAdd(createRandomWords())}>Add Random Item to list</Button>
      <List>
      {renderedList}
      </List>
      </Box>
  );
}
export default MainList

