# Sancta Missa API

A web API built using Express and Node which extracts data about the propers of the Roman Catholic Mass according to the 1962 Missal instituted by Pope John XXIII (and used by groups such as the FSSP, SSPX, ICKSP, and other Tridentine Mass communities in union with Rome).

The propers of the Roman Catholic liturgy are a set of texts that change depending on the day, to reflect a particular event in the liturgical calendar (such as a feast commemorating an event in the life of Jesus Christ, or that of a saint).

Data was scraped from https://divinumofficium.com/cgi-bin/missa/missa.pl and outputted in JSON format.

# NOW ACCESSIBLE ON THE WEB!
Visit https://sanctamissa.herokuapp.com/missa to see the app in action!

# API ROUTES
/missa => gets the Mass propers for today

/missa/:month/:day => gets the Mass propers for month/day/currentYear (e.g. /missa/5/27 will get the propers for 27 May, 2019)

/missa/:month/:day/:year => gets the Mass propers for month/day/year (e.g. /missa/5/27/2018 will get the propers for Trinity Sunday 2018

/missa/:month/:day/:year/:num? => Gets the numth Mass said on month/day/year (useless except on Christmas Day when 3 Masses are said)
