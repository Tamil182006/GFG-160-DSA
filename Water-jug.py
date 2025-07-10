def solve_water_jug(capacities, target, target_jug_index):
    def is_goal(state):
        return state[target_jug_index] == target

    def get_moves(state):
        moves = []
        n = len(state)
        for i in range(n):
            if state[i] < capacities[i]:
                s = list(state); s[i] = capacities[i]
                moves.append((tuple(s), f"Fill Jug {i+1}"))
            if state[i] > 0:
                s = list(state); s[i] = 0
                moves.append((tuple(s), f"Empty Jug {i+1}"))
        for i in range(n):
            for j in range(n):
                if i != j and state[i] > 0 and state[j] < capacities[j]:
                    s = list(state)
                    amt = min(state[i], capacities[j] - state[j])
                    s[i] -= amt; s[j] += amt
                    moves.append((tuple(s), f"Pour Jug {i+1} → Jug {j+1} ({amt}L)"))
        return moves

    start = tuple([0] * len(capacities))
    visited = []
    queue = [(start, [])]

    while queue:
        state, path = queue.pop(0)
        if state in visited: continue
        visited.append(state)

        if is_goal(state):
            print(f"\n Target of {target}L reached in Jug {target_jug_index + 1}\n")
            for step_num, (s, action) in enumerate(path + [(state, "️ Goal Reached")]):
                jugs = " | ".join([f"Jug {i+1}: {v}L" for i, v in enumerate(s)])
                print(f"Step {step_num + 1}: {action}\n         → {jugs}")
            return

        for new_state, action in get_moves(state):
            if new_state not in visited:
                queue.append((new_state, path + [(state, action)]))

    print("\n No solution found for the given target and jug.")

n = int(input("How many jugs? "))
capacities = [int(input(f"Capacity of Jug {i+1}: ")) for i in range(n)]
target = int(input("Target amount to measure: "))
target_jug_index = int(input(f"In which jug (1 to {n}) should the {target}L be? ")) - 1

solve_water_jug(capacities, target, target_jug_index)
