<Setup Action>
tint screen: -255, -255, -255, 0, 1
hide battle hud
zoom: 200%, 1
camera screen: center, 1
move actor 0: point, 650, 360, 1
move enemy 0: point, 450, 360, 1
move actor 1: backward, 1000, 1
move actor 2: backward, 1000, 1
move actor 3: backward, 1000, 1
move enemy 1: backward, 1000, 1
move enemy 2: backward, 1000, 1
move enemy 3: backward, 1000, 1
wait for movement
move actor 0: forward, 200, 120
move enemy 0: forward, 200, 120
tint screen: sepia, 60
wait for movement
face enemy 0: backward
wait: 20
move enemy 0: actor 0, back base, 10
motion attack: enemy 0
se: play enemy attack
jump actor 0: 200%, 40
move actor 0: backward, 200, 40
face actor 0: forward
motion evade: actor 0
wait for movement
move actor 0: enemy 0, front base, 10
motion attack: actor 0
face enemy 0: forward
motion guard: enemy 0
wait for movement
animation 2: enemy 0
move enemy 0: backward, 100, 20
face enemy 0: forward
motion guard: enemy 0
wait for animation
wait for movement
zoom: 100%, 60
tint screen: normal, 60
wait for movement
motion item: enemy 0
wait: 20
move enemy 1: return, 60
move enemy 2: return, 60
move enemy 3: return, 60
wait for movement
move enemy 0: return, 40
jump enemy 0: 100%, 40
wait: 40
wait for movement
motion item: actor 0
wait: 20
move actor 1: return, 60
move actor 2: return, 60
move actor 3: return, 60
wait for movement
move actor 0: return, 40
jump actor 0: 100%, 40
wait for movement
show battle hud
</Setup Action>

<Whole Action>
</Whole Action>

<Target Action>
</Target Action>

<Finish Action>
</Finish Action