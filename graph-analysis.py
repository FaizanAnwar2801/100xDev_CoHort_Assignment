import matplotlib.pyplot as plt

# Updated data from the table
specific_threats = [
    'Agricultural expansion', 'Urbanization and infrastructure development', 'Mining activities',
    'Overgrazing by livestock', 'Invasive plant species',
    'Poaching', 'Disturbance from tourism',
    'Altered precipitation patterns', 'Increased frequency of extreme weather events',
    'Low genetic diversity',
    'Predation by feral dogs and other predators',
    'Pesticide use'
]

impact_levels = [
    'High', 'High', 'Medium',
    'High', 'Medium',
    'High', 'Medium',
    'Medium', 'Medium',
    'High',
    'Medium',
    'Low'
]

# Assign numerical values to impact levels
impact_numeric = {'High': 3, 'Medium': 2, 'Low': 1}
impact_values = [impact_numeric[level] for level in impact_levels]

# Plotting the histogram
plt.figure(figsize=(12, 8))
plt.barh(specific_threats, impact_values, color=['red' if x == 3 else 'orange' if x == 2 else 'green' for x in impact_values])
plt.xlabel('Impact Level')
plt.ylabel('Specific Threats')
plt.title('Specific Threats vs. Impact Levels for the Great Indian Bustard')
plt.yticks(ticks=range(len(specific_threats)), labels=specific_threats)
plt.grid(True)
plt.show()


# Python Graph for GIB threat data prepared.