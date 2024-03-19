import os
# import pyautogui  
import time
import pyautogui  
import time

time.sleep(4)
s="""Notice to Pay Rent: The landlord typically begins by issuing a notice to pay rent or quit the premises. This notice informs the tenant of the overdue rent and gives them a specified period (usually 3 to 5 days) to pay the outstanding amount.
Demand Letter: If the tenant fails to pay rent after receiving the notice, the landlord can send a formal demand letter requesting payment within a specific timeframe. The letter should outline the consequences of non-payment, such as eviction proceedings.
Eviction Proceedings: If the tenant still does not pay rent, the landlord may initiate eviction proceedings by filing a lawsuit in the appropriate court. The tenant will receive a summons to appear in court, where a judge will hear both sides of the case.
Court Judgment: If the court rules in favor of the landlord, a judgment for possession of the premises may be issued, allowing the landlord to evict the tenant. Additionally, the court may order the tenant to pay any outstanding rent owed, along with any legal fees incurred by the landlord.
Writ of Possession: If the tenant still refuses to vacate the premises after the court judgment, the landlord can obtain a writ of possession from the court. This legal document authorizes law enforcement to physically remove the tenant and their belongings from the rental property.
"""
l=s.split("\n")
print(l)
for i in l:
    pyautogui.typewrite(i)

    pyautogui.press('down')

    pyautogui.press('down')

    pyautogui.press('down')


