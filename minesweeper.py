# Read input values
r, c, mines = map(int, input().split())

# Initialize a 2D list (grid) of dots
dots = [['.' for _ in range(c)] for _ in range(r)]

# Read mine positions and update the grid
for _ in range(mines):
    x, y = map(int, input().split())
    dots[x - 1][y - 1] = '*'

# Print the grid
for row in dots:
    print(''.join(row))
