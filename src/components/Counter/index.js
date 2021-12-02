import { Button, CounterText, Wrapper } from "./style"

export default function Counter({count, setCount}) {
  return (
    <Wrapper>
      <Button onClick={() => setCount(prev => prev > 0 ? prev-1 : 0)}>
        -
      </Button>
      <CounterText>{count}</CounterText>
      <Button onClick={() => setCount(prev => prev+1)}>
        +
      </Button>
    </Wrapper>
  )
}